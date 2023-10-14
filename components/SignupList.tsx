import { StyledTable } from "../components/sharedstyles";
import Link from "next/link";
import { Signup } from "../types/api";

interface SignupListProps {
  signups: Signup[];
  isTableExpanded: boolean;
  setIsTableExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SignupList: React.FC<SignupListProps> = ({
  signups,
  isTableExpanded,
  setIsTableExpanded,
}) => {
  const displayedSignups = isTableExpanded ? signups : signups.slice(0, 5);
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>Name</th>
          <th>Signup Date</th>
        </tr>
      </thead>
      <tbody>
        {displayedSignups.map((user) => (
          <tr key={user.id}>
            <td>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </td>
            <td>{user.signupDate}</td>
          </tr>
        ))}
        <tr>
          <td
            colSpan={2}
            style={{ textAlign: "center", cursor: "pointer" }}
            onClick={() => setIsTableExpanded(!isTableExpanded)}
          >
            {isTableExpanded ? "Show Less" : "Show More"}
          </td>
        </tr>
      </tbody>
    </StyledTable>
  );
};
