import { formatDate, TagsList } from "../../Utils";

interface RealisationProps {
  idRealisation: string;
  title: string;
  tags: string[];
  date: Date;
  dateEnd: Date;
  children: React.ReactNode;
  current: string;
}

export const Realisation: React.FC<RealisationProps> = ({
  idRealisation,
  title,
  tags,
  date,
  dateEnd,
  children,
  current,
}) => {
  return (
    <div className="realisation subcontainer" id={idRealisation}>
      <h2>{title}</h2>
      <span className="tag">
        Période : {formatDate(date)} - {formatDate(dateEnd)}
      </span>
      <div className="realisation-content">{children}</div>

      <TagsList tags={tags} current={current} />
    </div>
  );
};
