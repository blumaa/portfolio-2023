import Link from "next/link";
import { Education } from "../globals/education";

const EducationCard = ({ school }: { school: Education }) => {
  const { name, link, linkTarget, degree, graduationYear } = school;

  return (
    <div className={`flex`}>
      <span className="p-2">
        <Link
          href={link || "#"}
          target={linkTarget}
          className={`font-bold text-l decoration-sky-500 underline underline-offset-1 
            hover:no-underline`}
        >{`${name}`}</Link>
        {` ${degree}`}
        {graduationYear && ` ${graduationYear}`}
      </span>
    </div>
  );
};

export default EducationCard;
