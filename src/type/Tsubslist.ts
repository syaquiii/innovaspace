import { StaticImport } from "next/dist/shared/lib/get-img-props";

type Tsubslist = {
  id: number;
  icon: string | StaticImport;
  title: string;
  content: string;
};

export default Tsubslist;
