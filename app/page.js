import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <p>
        Go to <Link href="/week-2">Week 2</Link> assignments.
      </p>
    </div>
  );
};

export default HomePage;
