import { LoginFormDto } from '@/dtos/loginForm.dto';
import { PlayerProfile } from '@/types/PlayerProfile';
import { AuthResponse, AuthTokenResponse, OAuthResponse, SupabaseClient, User, UserAttributes, UserResponse, createClient } from '@supabase/supabase-js';
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

const supabaseUrl: string = process.env.VUE_APP_SUPABASE_URL!;
const supabaseKey: string = process.env.VUE_APP_SUPABASE_KEY!;

export const useAuthStore = defineStore('auth', () => {
	const user = ref<User>();
	const currentToken = ref<string>();
	const supabase = ref<SupabaseClient>();

	supabase.value = createClient(supabaseUrl, supabaseKey);
	// setup auth state listener
	supabase.value.auth.onAuthStateChange((event, session) => {
		// the "event" is a string indicating what trigger the state change (ie. SIGN_IN, SIGN_OUT, etc)
		// the session contains info about the current session most importanly the user dat

		// if the user exists in the session we're logged in
		// and we can set our user reactive ref
		user.value = session?.user || undefined;

		if (session) {
			currentToken.value = session.access_token;
		}

	});

	/**
	 * Login with email and password
	 */
	const login = async (dto: LoginFormDto): Promise<User> => {
		let authResponse: AuthTokenResponse = await supabase.value!.auth.signInWithPassword(dto);

		if (authResponse.error) {
			throw authResponse.error;
		}

		return authResponse.data.user;
	};

	/**
	 * Login with google, github, etc
	 */
	const loginWithSocialProvider = async (token: string) => {
		let authResponse: OAuthResponse = await supabase.value!.auth.signInWithOAuth({ provider: "google" });
		if (authResponse.error) {
			throw authResponse.error;
		}

		return user;
	};

	/**
	 * Logout
	 */
	const logout = async () => {
		const error = await supabase.value!.auth.signOut();
		if (error) {
			throw error;
		}
	};

	
		/**
		 * compute a getter for user auth state
		 */
	const isAuthenticated = computed(() => isLoggedIn())

	/**
	 * Check if the user is logged in or not
	 */
	const isLoggedIn = () => {
		return !!user.value;
	};

	const isAdmin = () => {
		return isLoggedIn() && user.value!.id == process.env.VUE_APP_OURKADE_ADMIN_ID;
	};

	/**
	 * Register
	 */
	const register = async (email: string, password: string) => {
		let authResponse: AuthResponse = await supabase.value!.auth.signUp(
			{
				email, password,
				options: {
					emailRedirectTo: `${window.location.origin}/me?fromEmail=registrationConfirmation"`
				},
			});

		if (authResponse.error) {
			throw authResponse.error;
		}

		return authResponse.data.user;
	};

	/**
	 * Update user email, password, or meta data
	 */
	const update = async (attributes: UserAttributes) => {
		let userResponse: UserResponse = await supabase.value!.auth.updateUser(attributes);

		if (userResponse.error) {
			throw userResponse.error;
		}

		return userResponse.data.user;
	};

	/**
	 * Send user an email to reset their password
	 * (ie. support "Forgot Password?")
	 */
	const sendPasswordResetEmail = async (email: string) => {
		let { data, error } = await supabase.value!.auth.resetPasswordForEmail(email);
		if (error) {
			throw error;
		}

		return user;
	};

	/**
	 * Will be useful for informing the application what to do
	 * when Supabase redirects a user back to app
	 * after confirming email address
	 */
	const maybeHandleEmailConfirmation = async (route: any) => { };

	return {
		user,
		currentToken,
		login,
		loginWithSocialProvider,
		isAuthenticated,
		isLoggedIn,
		isAdmin,
		logout,
		register,
		update,
		sendPasswordResetEmail,
		maybeHandleEmailConfirmation,
	};

})