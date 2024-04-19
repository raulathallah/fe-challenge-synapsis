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

  useEffect(() => {
    if (response) {
      if (response.code === 200) {
        setCode(response.code);
      }
    }
    dispatch(resetResponse());
  }, [response]);

  useEffect(() => {
    if (code) {
      if (code === 200) {
        alert("Success!");
        setTimeout(() => {
          router.push("/user");
        }, 1000);
      } else {
        alert("Error!");
      }
    }
  }, [code]);

  useEffect(() => {
    if (params.slug[0] === "update" && detail) {
      setName(detail.name);
      setEmail(detail.email);
      setGender(detail.gender);
      setStatus(detail.status);
    }
  }, [detail, params]);

  console.log(response);
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
    <div className="w-1/2">
      <CardCustom type="display">
        <div className="space-y-6">
          <div className="grid gap-4">
            <FaUserCircle size={56} />
            <div className="gap-4 grid grid-cols-2">
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
                />
              </div>
              <div className="space-y-2">
                <LabelCustom>Gender</LabelCustom>
                <select className="" value={gender} onChange={onChangeGender}>
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

          <div className="flex gap-2 justify-end">
            <ButtonCustom type="danger">Cancel</ButtonCustom>
            <ButtonCustom type="" onClick={onSubmit}>
              Save
            </ButtonCustom>
          </div>
        </div>
      </CardCustom>
    </div>
  );
}
