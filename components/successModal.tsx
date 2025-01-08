import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

export default function SuccessModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean,
  onClose: () => void
}) {
  return (
    <>
      <Modal isOpen={isOpen}>
        <ModalContent>
              <ModalBody className="display:flex justify:center">
                <h3 className="text-lg font-semibold py-5">Login Successfull</h3>
              </ModalBody>
              <ModalFooter className="flex justify-center">
                <Button color="primary" onPress={onClose}>
                  ok
                </Button>
              </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}