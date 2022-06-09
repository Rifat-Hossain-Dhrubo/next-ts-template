import type { NextPage } from "next";

import CustomHead from "components/CustomHead";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 ">
      <CustomHead />
      <main className="container mx-auto">
        <section className="grid place-content-center">
          <h1 className="text-purple-500 text-2xl">WorkSpace Template</h1>
        </section>
      </main>
    </div>
  );
};

export default Home;
