import Image from "next/image";

export default function Logo({ className }: { className: string }) {
  return (
    <div className={className}>
      <Image
        src="/middle.png"
        alt="Paws"
        width={100}
        height={500}
        className="w-28 "
      />
    </div>
  );
}
