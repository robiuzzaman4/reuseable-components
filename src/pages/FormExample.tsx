import NormalForm from "../components/NormalForm/NormalForm";
import Container from "../components/ui/Container";

const FormExample = () => {
  return (
    <Container>
      <h1 className="text-3xl text-purple-500 font-bold mt-8">
        Form Example Page
      </h1>

      <NormalForm />
    </Container>
  );
};

export default FormExample;
