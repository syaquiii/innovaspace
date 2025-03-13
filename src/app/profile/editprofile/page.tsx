"use client";
import HandleUpdateUser from "@/action/HandleUpdateUser";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/InputField";
import { useUserContext } from "@/hooks/useUserContext";
import { getUUIDFromToken } from "@/utils/JwtDecoder";
import React from "react";

const EditProfileComponent: React.FC = () => {
  const { userProfile } = useUserContext();
  const uuid = getUUIDFromToken();

  if (!uuid) {
    return <div>Error: Unable to retrieve user ID.</div>;
  }

  const {
    formState,
    loading,
    error = null,
    success,
    handleInputChange,
    handleSubmit,
  } = HandleUpdateUser(userProfile);

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handleSubmit(uuid);
  };

  if (!formState) {
    return <div>Loading...</div>;
  }

  return (
    <form className="w-full py-10 lg:py-0" onSubmit={handleFormSubmit}>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {success && <div style={{ color: "green" }}>{success}</div>}
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        <div className="lg:w-1/2 w-full flex flex-col gap-4">
          <div className="w-full">
            <label className="text-lg font-bold" htmlFor="nama">
              Nama
            </label>
            <Input
              value={formState.nama || ""}
              onChange={(e) => handleInputChange("nama", e.target.value)}
            />
          </div>
          <div>
            <label className="text-lg font-bold" htmlFor="email">
              Email
            </label>
            <Input
              type="email"
              name="email"
              value={formState.email || ""}
              onChange={(e) => handleInputChange("email", e.target.value)}
            />
          </div>
        </div>
        <div className="lg:w-1/2 flex flex-col gap-4">
          <div>
            <label className="text-lg font-bold" htmlFor="preferensi">
              Preferensi
            </label>
            <Input
              value={formState.preferensi || ""}
              onChange={(e) => handleInputChange("preferensi", e.target.value)}
            />
          </div>
          <div>
            <label className="text-lg font-bold" htmlFor="institusi">
              Institusi
            </label>
            <Input
              value={formState.institusi || ""}
              onChange={(e) => handleInputChange("institusi", e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row justify-between gap-4 mt-4">
        <div className="flex gap-4">
          <Button
            variant={"normal"}
            type="submit"
            disabled={loading}
            className="lg:w-44 w-full"
          >
            {loading ? "Updating..." : "Update Profile"}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default EditProfileComponent;
