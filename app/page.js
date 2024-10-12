import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <p>
        Go to <Link href="/week-2">Week 2</Link> assignments.
      </p>
      <p>
        Go to <Link href="/week-3">Week 3</Link> assignments. 
      </p>
      <p>
        Go to <Link href="/week-4">Week 4</Link> assignments.
      </p>
      <p>
        Go to <Link href="/week-5">Week 5</Link> assignments.
      </p>
    </div>
  );
};

export default HomePage;
