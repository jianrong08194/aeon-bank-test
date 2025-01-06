"use client";
import React from "react";
import {Form, Input, Button} from "@nextui-org/react";

export default function LoginPage() {
  const [action, setAction] = React.useState<string>("");
 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.currentTarget));
    setAction(`submit ${JSON.stringify(data)}`);


};

const getSecureWord = async () => {
    // console.log("getSecureWord");   
    fetch("/api/getSecureWord", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((response) => response.json())
    .then((result) => {
        console.log("Success:", result);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
}
  return (
    <>
    <Button onClick={getSecureWord} onPress={getSecureWord} color="primary">
        Test
    </Button>
    <Form
      className="w-full max-w-xs flex flex-col gap-4"
      validationBehavior="native"
      onReset={() => setAction("reset")}
      onSubmit={(e) => {
        e.preventDefault();
        let data = Object.fromEntries(new FormData(e.currentTarget));

        setAction(`submit ${JSON.stringify(data)}`);
      }}
    >
      <Input
        isRequired
        errorMessage="Please enter a valid username"
        label="Username"
        labelPlacement="outside"
        name="username"
        placeholder="Enter your username"
        type="text"
      />

      <Input
        isRequired
        errorMessage="Please enter a valid email"
        label="Email"
        labelPlacement="outside"
        name="email"
        placeholder="Enter your email"
        type="email"
      />
      <div className="flex gap-2 justify-between w-full" >
        <Button type="reset" variant="flat">
          Reset
        </Button>
        <Button color="primary" type="submit">
          Submit
        </Button>
      </div>
      {action && (
        <div className="text-small text-default-500">
          Action: <code>{action}</code>
        </div>
      )}
    </Form>
    </>
  );
}

