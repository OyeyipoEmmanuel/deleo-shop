import React from "react";
import { MailOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <main className="my-64 relative">
      <section className="absolute -translate-y-48 mx-8 bg-black text-white p-8 rounded-xl flex flex-col md:flex-row md:justify-between md:items-center">
        <h1 className="text-4xl font-bold font-serif pb-6 md:w-[50%] md:text-4xl">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h1>
        <div className="">
          <input
            type="email"
            placeholder="Enter your email address"
            className="bg-white rounded-full px-8 py-3  w-full placeholder:text-gray-500"
          />
          <Button
            variant="primary"
            className="bg-white text-black text-center rounded-full w-full py-6 cursor-pointer mt-3 hover:bg-gray-200"
          >
            Subscribe to Newsletter
          </Button>
        </div>
      </section>

      <section className="bg-[#dadada] w-full flex px-8 pt-48">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit cumque sit, magnam accusamus voluptatem quia rem quam mollitia impedit obcaecati libero ex, sed voluptatibus corrupti harum modi molestiae nobis. Molestiae eligendi architecto tempora velit eaque aut. Doloremque laborum fuga provident autem iusto error, modi, quibusdam ad facere corporis saepe et libero, eaque repellendus. Itaque, minus eaque est quam distinctio ullam. Beatae ea doloremque tempore ducimus perferendis possimus dignissimos aspernatur explicabo assumenda dicta iusto a velit repudiandae delectus maiores officiis nulla quis eaque dolorum ipsa dolorem, laboriosam rem quisquam. Culpa, sapiente quia iusto modi velit eius soluta nihil molestiae exercitationem neque.
      </section>
    </main>
  );
};

export default Footer;
