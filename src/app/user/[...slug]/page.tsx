"use client";
import ButtonCustom from "@/components/Button";
import CardCustom from "@/components/CardCustom";
import LabelCustom from "@/components/Label";
import { getUsersSelector } from "@/lib/selectors/selectors";
import { createUser, resetResponse, updateUser } from "@/lib/slices/user";
import { AppDispatch } from "@/lib/store";
import { useParams, useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

export default function CuUsers() {
  const params = useParams();
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { detail, response } = useSelector(getUsersSelector);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const [code, setCode] = useState(0);
  const [errorMessage, setErrorMessage] = useState<string[]>([]);
  const [showError, setShowError] = useState(false);
  useEffect(() => {
    if (response) {
      setCode(response.status);
      if (response.response) {
        response.response.data.map((e: any) =>
          setErrorMessage((current) => [...current, `${e.field}: ${e.message}`])
        );
      }
    }
  }, [response]);
  useEffect(() => {
    if (code !== 0) {
      if (code !== 201 && code !== 200) {
        setShowError(true);
      } else {
        alert("Success!");
        setTimeout(() => {
          router.push("/user");
        }, 1000);
      }
    }
    setCode(0);
  }, [code]);
  useEffect(() => {
    if (params.slug[0] === "update" && detail) {
      setName(detail.name);
      setEmail(detail.email);
      setGender(detail.gender);
      setStatus(detail.status);
    }
  }, [detail, params]);

  useEffect(() => {
    if (showError) {
      console.log(errorMessage);
      setTimeout(() => {
        setShowError(false);
        onCloseMessage();
      }, 5000);
    }
  }, [showError]);

  const onCloseMessage = () => {
    setErrorMessage([]);
    setShowError(false);
  };
  const onSubmit = () => {
    const body: CreateUserType = {
      name,
      email,
      gender,
      status,
    };
    if (params.slug[0] === "update" && detail) {
      dispatch(updateUser({ body, id: params.slug[1] }));
    } else {
      dispatch(createUser({ body }));
    }
  };

  const onCancel = () => {
    router.back();
  };

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onChangeGender = (e: ChangeEvent<HTMLSelectElement>) => {
    setGender(e.target.value);
  };
  const onChangeStatus = (e: ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value);
  };

  return (
    <div className="space-y-2">
      {showError && (
        <div className="bg-red text-white py-2 px-6">
          <ul className="list-disc space-y-2">
            {errorMessage.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </div>
      )}

      <CardCustom type="display">
        <div className="space-y-6">
          <div className="grid gap-4">
            <div className="w-full flex justify-center lg:justify-start">
              <FaUserCircle size={72} />
            </div>
            <div className="gap-4 grid lg:grid-cols-2">
              <div className="space-y-2">
                <LabelCustom>Name</LabelCustom>
                <input className="" value={name} onChange={onChangeName} />
              </div>
              <div className="space-y-2">
                <LabelCustom>Email</LabelCustom>
                <input
                  className=""
                  value={email}
                  type="email"
                  onChange={onChangeEmail}
                  placeholder="name@example.com"
                />
              </div>
              <div className="space-y-2">
                <LabelCustom>Gender</LabelCustom>
                <select className="" value={gender} onChange={onChangeGender}>
                  <option value="" disabled>
                    --Select Gender--
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="space-y-2">
                <LabelCustom>Status</LabelCustom>
                <select className="" value={status} onChange={onChangeStatus}>
                  <option value="" disabled>
                    --Select Status--
                  </option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex gap-2 lg:justify-end justify-center">
            <ButtonCustom type="danger" onClick={onCancel}>
              Cancel
            </ButtonCustom>
            <ButtonCustom type="" onClick={onSubmit}>
              Save
            </ButtonCustom>
          </div>
        </div>
      </CardCustom>
    </div>
  );
}
