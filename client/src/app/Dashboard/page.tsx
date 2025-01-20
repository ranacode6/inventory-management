'use client';

import CardPopularProducts from './CardPopularProducts';

const page = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows">
      <CardPopularProducts />
      <div className="row-span-3 xl:row-span-6 bg-gray-500">2</div>
      <div className="row-span-2 xl:row-span-3 col-span-1 md:col-span-2 lg:col-span-1 bg-gray-500">
        3
      </div>
      <div className="row-span-3 bg-gray-500">4</div>
      <div className="md:row-span-1 xl:row-span-2 bg-gray-500">5</div>
      <div className="md:row-span-1 xl:row-span-2 bg-gray-500">6</div>
      <div className="md:row-span-1 xl:row-span-2 bg-gray-500">7</div>
    </div>
  );
};

export default page;
