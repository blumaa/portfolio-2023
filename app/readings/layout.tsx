import { BookOpenIcon } from "@heroicons/react/24/solid";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";

export default function BooksLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen">
      <Header>
        <div className="flex items-center space-x-2">
          <BookOpenIcon className="h-6 w-6" />
          <div className="text-2xl">Readings</div>
        </div>
      </Header>
      <div className="grow">{children}</div>
      <Footer />
    </div>
  );
}
