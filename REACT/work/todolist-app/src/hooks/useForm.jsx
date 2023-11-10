import { useState } from "react";

export default function useForm({ initState }) {
  const [form, setForm] = useState(initState);
  const handleInput = (evt) => {
    setForm((prev) => {
      return { ...prev, [evt.target.name]: evt.target.value };
    });
  };
  return { form, setForm, handleInput };
}
