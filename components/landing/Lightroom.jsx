import Image from "next/image";
import Landing from "../../public/images/landing.jpeg";
function LigthRoom() {
  return (
    <main role="main" class="w-full lg:col-span-3">
      <section>
        <div class="grid grid-cols-1 gap-3 p-4">
          <div class="aspect-[280/300] bg-zinc-100 rounded-xl overflow-hidden filter grayscale">
            <Image class="object-cover h-full" src={Landing} alt="#" />
          </div>
        </div>
      </section>
    </main>
  );
}
export default LigthRoom;
