"use client";
export function AccountInfo() {
  const post_count = 10;
  const follower_count = 120;
  const following_count = 100;

  const follow = () => {
    console.log("follow");
  }

  return (
    <div>
      {/* <div className="h-60 w-60 rounded-full bg-gray-200 p-4 shadow-lg flex items-center justify-center">
      </div> */}
      <div className="justify-center mt-4">
        <h2 className="text-center text-2xl font-bold tracking-widest">2525_donuts</h2>
        <div className="flex items-center justify-center mt-1">
          <p className="text-md mx-1">{post_count} posts</p>
          <p className="text-md mx-1">{follower_count} followers</p>
          <p className="text-md mx-1">{following_count} following</p>
        </div>
        <div className="flex items-center justify-center mt-3">
          <button className="rounded-full border-2 border-solid border-black p-2 w-20 text-center hover:bg-black hover:text-white" onClick={follow}>follow</button>
        </div>
      </div>
    </div>
  );
}
