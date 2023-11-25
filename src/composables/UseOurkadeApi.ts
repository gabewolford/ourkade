import axios, { AxiosRequestHeaders } from "axios";
import { useAuthStore } from "@/stores/auth";
import { CreateCompetitionDto } from "@/dtos/createCompetion.dto";
// const authStore = useAuthStore();

export default function useOurkadeApi() {
  const authStore = useAuthStore();
  // console.log(authStore.currentToken!)

  const axiosClient = axios.create({
    baseURL: process.env.VUE_APP_OURKADE_API, // Replace with your API's base URL
    headers: {
      Authorization: "Bearer " + authStore.getCurrentToken,
    },
  });

  let getProfile = async function () {
    try {
      let result = await axiosClient.get(`/player-profile`);
      return result.data;
    } catch (error) {
      return error;
    }
  };

  let getGlobalHighScores = async function (gameId: Number) {
    try {
      let result = await axiosClient.get(
        `/competition/high-scores/all-time/${gameId}`
      );
      return result.data;
    } catch (error) {
      return error;
    }
  };

  let getPlayableCompetitions = async function () {
    try {
      let result = await axiosClient.get("/competition/contest/playable");
      return result.data;
    } catch (error) {
      return error;
    }
  };

  let createCompetition = async function (dto: CreateCompetitionDto) {
    try {
      let result = await axiosClient.post("/competition", dto);
      return result.data;
    } catch (error) {
      return error;
    }
  };

  return {
    axiosClient,
    getProfile,
    getPlayableCompetitions,
    createCompetition,
    getGlobalHighScores,
  };
}
