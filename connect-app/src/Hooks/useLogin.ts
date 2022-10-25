import { useMemo } from "react";
import { loginApi } from "../Service/Authenticationservice";
import { useMutation } from "@tanstack/react-query";
import { ILoginResponse } from "../Models/Models";
import { AxiosResponse } from "axios";
import { RESPONSE_STATUS } from "connect-utilities";

export const useLogin = () => {
  const { mutate: login } = useMutation(loginApi, {
    onSuccess(data: AxiosResponse<ILoginResponse>) {
      const {
        data: { message, status, token },
      } = data;
      if (status === RESPONSE_STATUS.SUCCESS) {
        console.log(token);
      } else {
        console.log(message);
      }
    },
    onError(error) {
      console.log(error);
    },
  });
  return useMemo(() => ({ login }), [login]);
};
