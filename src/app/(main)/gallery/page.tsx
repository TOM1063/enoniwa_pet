// import { ResultTable } from "~/components/gallery/result-table";
// import { getResults } from "~/server/queries/get-results";
import { AccountInfo } from "@/components/gallery/account-info";
import { Preview } from "@/components/gallery/preview";
export default async function GalleryPage() {
//   const results = await getResults();
  return (
    <main>
      <div className="h-screen bg-gray-100">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="w-3 h-3 absolute top-0 left-0">
            <Preview />
          </div>
          <AccountInfo />
        </div>
      </div>
    </main>
  );
}