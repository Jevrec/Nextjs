
import { lusitana } from '@/app/ui/fonts';
import { fetchCardData } from '@/app/lib/data';
import { Button } from '../button';



export default async function ContactForm() {

  return (
    <form action="" className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        <div>
            <textarea name="message" id="message" className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"></textarea>
            <input type="email" id="email" name="email" className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"></input>
        </div>
        <Button>Send</Button>
    </form>
  );
}