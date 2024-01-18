import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Form, FormSection, FormSubmit, Input } from "../components/Form";
import Container from "../components/ui/Container";
import { z } from "zod";

const TestSchema = z.object({
  name: z.string(),
  email: z.string(),
});

type TTest = z.infer<typeof TestSchema>;

const FormExample = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TTest>();
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <Container>
      <h1 className="text-3xl text-purple-500 font-bold mt-8">
        Form Example Page
      </h1>

      <Form
        double={true}
        onSubmit={handleSubmit(onSubmit) as SubmitHandler<FieldValues>}
      >
        <FormSection>
          <Input
            type="text"
            label="Enter Your Name"
            register={register("name")}
            errors={errors}
          />
          <Input
            type="email"
            label="Enter Your Email"
            register={register("email")}
            errors={errors}
          />
        </FormSection>
        <FormSubmit />
      </Form>
    </Container>
  );
};

export default FormExample;
