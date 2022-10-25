import { useForm, SubmitHandler } from "react-hook-form";
import { LoginInput } from "../Models/Models";
import styled from "styled-components";
import { useLogin } from "../Hooks/useLogin";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Form = styled.form`
  width: 25%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const TextBox = styled.input`
  margin-bottom: 20px;
  border-radius: 50px;
  font-size: 14px;
  border: 2px solid #ebebeb;
  box-shadow: 2px 10px 10px rgb(0 0 0 / 25%);
  outline: none;
  background-color: #fff;
  width: 100%;
  &.padd-input {
    padding: 15px 30px;
  }
`;

const SubmitButton = styled(TextBox)`
  cursor: pointer;
  padding: 15px 0;
  margin-left: 30px;
`;
export default function App() {
  const { login } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>();
  const onSubmit: SubmitHandler<LoginInput> = (payload) => login(payload);
  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <TextBox
          className="padd-input"
          defaultValue="samirkr2527@gmail.com"
          {...register("email")}
        />
        <TextBox
          className="padd-input"
          defaultValue="12345"
          {...register("password", {
            required: { value: true, message: "This field is required." },
          })}
        />
        {errors.password && <span>{errors.password.message}</span>}
        <SubmitButton type="submit" />
      </Form>
    </Wrapper>
  );
}
