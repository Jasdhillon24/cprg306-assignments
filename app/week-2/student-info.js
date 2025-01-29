import Link from "next/link";

export default function StudentInfo() {
  return (
    <div>
      <p><strong>Jasdeep Dhillon</strong></p>
      <p>
        GitHub Repository:{" "}
        <Link href="https://github.com/Jasdhillon24/cprg306-assignments" target="_blank">
          Click here
        </Link>
      </p>
    </div>
  );
}
