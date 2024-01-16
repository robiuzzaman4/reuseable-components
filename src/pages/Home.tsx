import { useState } from "react";
import Button from "../components/ui/Button";
import Modal from "../components/ui/Modal";
import Container from "../components/ui/Container";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

const Home = () => {
  const [modal, setModal] = useState(false);
  const handleModalClose = () => {
    setModal((prev) => !prev);
  };
  const handleModalOpen = () => {
    setModal((prev) => !prev);
  };

  return (
    <Container >
      <h1 className="text-3xl text-purple-500 font-bold mt-8">Home Page</h1>
      <div className="flex items-center gap-8 py-10">
        <Button onClick={handleModalOpen}>Open Modal</Button>
        <Modal isOpen={modal} onClose={handleModalClose}>
          <Modal.Header>
            <h3 className="text-xl font-medium">Re-useable Modal</h3>
            <Modal.CloseButton />
          </Modal.Header>

          <div className="w-full flex flex-col items-center justify-center gap-4 py-8">
            <CheckCircleIcon className="h-12 w-12 text-green-500" />
            <div className="flex flex-col items-center justify-center gap-2">
              <h1 className="text-center text-3xl text-green-500 font-medium">
                Successfully
              </h1>
              <p className="text-center text-base font-medium text-slate-400">
                Make Re-useable Modal Component.
              </p>
            </div>
          </div>
        </Modal>
      </div>
    </Container>
  );
};

export default Home;
