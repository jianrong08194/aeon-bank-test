"use client";
import React from "react";
// import { useRouter } from "next/navigation";
import { Form, Input, Button, Link } from "@nextui-org/react";
import CryptoJS from "crypto-js";
import { createServer } from "miragejs"

createServer({
  routes() {
    this.get("/api/getSecureWord", () => ({ data: 'secure123' })),
      this.post("/api/login", () => ({ data: 'success' }))
  },
})


export default function LoginPage() {
  // const router = useRouter();
  const [secureWord, setSecureWord] = React.useState<string>("");
  const [step, setStep] = React.useState<number>(1);
  const [usernameSubmited, setUsernameSubmited] = React.useState<boolean>(false);
  const [username, setUsername] = React.useState<string>("");

  const getSecureWord = async (event: React.FormEvent<HTMLFormElement>) => {
    const username = event.currentTarget.username.value;
    fetch(`/api/getSecureWord?username=${username}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.data) {
          setSecureWord(result.data);
          setUsernameSubmited(true);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });

  }

  const submitLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const password = formData.get("password") as string;
    const encryptedPassword = CryptoJS.AES.encrypt(password, "secret key 123").toString();
    const data = {
      username,
      password: encryptedPassword,
    };

    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => response.json())
      .then((result) => {
        // if(result.data) {
        // router.push("/simpleTable");
        if (result.data === 'success') {
          window.location.href = "/simpleTable";
        }
        // }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    // You can now send `data` to your server
    // setAction(`submit ${JSON.stringify(data)}`);
  }

  const handleCancel = () => {
    setStep(1);
    setUsernameSubmited(false);
    setUsername("");
  }

  return (
    <div className="flex flex-col items-center justify-center rounded shadow-lg min-w-100 gap-4 py-5 px-3 border-2">
      {step === 1 && (

        <Form
          className="w-full max-w-xs flex flex-col gap-4 py-5 px-3"
          validationBehavior="native"
          onSubmit={(e) => {
            e.preventDefault();
            let data = Object.fromEntries(new FormData(e.currentTarget));
            getSecureWord(e);
          }}>
          <Input
            isRequired
            errorMessage="Please enter a valid username"
            label="Username"
            labelPlacement="outside"
            name="username"
            placeholder="Enter your username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            disabled={usernameSubmited}
            data-testid="username"
          />
          <p className="text-small text-default-500 blue-500" data-testid="secure-word">
            Secure Word: {secureWord}
          </p>
          {
            usernameSubmited && username !== "" ? (<>
              <Button color="success" type="button" className="w-full" onPress={() => setStep(2)}>
                Next
              </Button>
              <div className="flex justify-center w-full py-0">
                <Link href="#" className="text-center text-blue-500 text-xs"
                  onPress={() => handleCancel()}
                >
                  cancel
                </Link>
              </div>
            </>

            ) :
              (
                <Button color="primary" type="submit" className="w-full">
                  Submit
                </Button>
              )
          }

        </Form>
      )}

      {step === 2 && (
        <Form
          className="w-full max-w-xs flex flex-col gap-4 py-5 px-3"
          validationBehavior="native"
          onSubmit={(e) => {
            e.preventDefault();
            let data = Object.fromEntries(new FormData(e.currentTarget));
            submitLogin(e);
          }}>
          <label>Please enter your password </label>
          <Input
            isRequired
            errorMessage="Please enter a valid password"
            label="Password"
            labelPlacement="outside"
            name="password"
            placeholder="Enter your password"
            type="password"
          />
          <Button color="primary" type="submit" className="w-full">
            Submit
          </Button>
          <div className="flex justify-center w-full py-0">
            <Link href="#" className="text-center text-blue-500 text-xs"
              onPress={() => handleCancel()}
            >
              cancel
            </Link>
          </div>
        </Form>
      )}
    </div>
  );
}

