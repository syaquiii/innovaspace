import { Mentor } from "@/type/TDummyData";
import { Mail } from "lucide-react";
import React, { FC } from "react";
interface IProps {
  data: Mentor;
}

const AtributMentor: FC<IProps> = (props) => {
  return (
    <div className="w-full h-full flex flex-col lg:flex-row lg:gap-20 mt-9 lg:mt-20">
      <div className="lg:w-1/2  w-full flex flex-col gap-4">
        <div className="w-full">
          <h4 className="font-bold  text-xl">Insitusi</h4>
          <div className="bg-light-default p-4 text-sm rounded-lg shadow-sm">
            <p>{props.data.institusi}</p>
          </div>
        </div>

        <div className="w-full">
          <h4 className="font-bold  text-xl">Pencapaian</h4>
          <div className="bg-light-default  p-4 text-sm rounded-lg shadow-sm">
            <p className="flex items-center gap-2">{props.data.pencapaian}</p>
          </div>
        </div>
        <div className="w-full">
          <h4 className="font-bold  text-xl">Pengalaman Kerja</h4>
          <div className="bg-light-default  p-4 text-sm rounded-lg shadow-sm">
            <p>{props.data.pengalaman_kerja}</p>
          </div>
        </div>
        <div className="w-full">
          <h4 className="font-bold  text-xl">Contact</h4>
          <div className="bg-light-default  p-4 text-sm rounded-lg shadow-sm">
            <p className="flex items-center gap-2">
              <Mail />
              {props.data.contact}
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 mt-4">
        <div className="w-full">
          <h4 className="font-bold  text-xl">Keahlian</h4>
          <div className="bg-light-default  p-4 text-sm rounded-lg shadow-sm">
            <p className="flex items-center gap-2">{props.data.keahilan}</p>
          </div>
          <div className="w-full mt-4">
            <h4 className="font-bold  text-xl">Topik yang di ajarkan</h4>
            <div className="bg-light-default  p-4 text-sm rounded-lg shadow-sm">
              <p className="flex items-center gap-2">
                <Mail />
                {props.data.topik_yang_diajarkan}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AtributMentor;
