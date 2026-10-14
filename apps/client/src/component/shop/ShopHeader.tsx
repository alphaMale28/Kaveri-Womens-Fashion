// import Link from "next/link";
// import { FiArrowUpRight } from "react-icons/fi";

// type ShopHeaderProps = {
//   category?: string;
//   designer?: string;
// };

// export default function ShopHeader({ category, designer }: ShopHeaderProps) {
//   const title = category || designer || "All pieces";

//   return (
//     <section className="border-b border-black/10">
//       <div className="kaveri-container">
//         <div className="grid gap-10 py-16 md:grid-cols-[1fr_auto] md:items-end md:py-20 lg:py-24">
//           <div>
//             <div className="flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.15em] text-kaveri-muted">
//               <Link
//                 href="/"
//                 className="transition-colors hover:text-kaveri-ink"
//               >
//                 Home
//               </Link>

//               <span>/</span>

//               <span>Shop</span>

//               {title !== "All pieces" && (
//                 <>
//                   <span>/</span>
//                   <span>{title}</span>
//                 </>
//               )}
//             </div>

//             <h1 className="font-editorial mt-8 text-[clamp(4rem,8vw,8rem)] font-normal leading-[0.8] tracking-[-0.045em]">
//               {title}.
//             </h1>
//           </div>

//           <div className="max-w-sm md:pb-2">
//             <p className="text-sm leading-7 text-kaveri-muted">
//               Discover considered silhouettes, refined details, and contemporary
//               pieces designed to become part of your wardrobe.
//             </p>

//             <Link href="/shop?sort=newest" className="kaveri-link mt-6">
//               New arrivals
//               <FiArrowUpRight className="text-base" />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

type ShopHeaderProps = {
  category?: string;
  designer?: string;
};

const ShopHeader = ({ category, designer }: ShopHeaderProps) => {
  const title = category || designer || "All pieces";

  return (
    <section className="border-b border-black/10">
      <div className="kaveri-container">
        <div className="grid gap-10 py-16 md:grid-cols-[1fr_auto] md:items-end md:py-20 lg:py-24">
          <div>
            <div className="flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.15em] text-kaveri-muted">
              <Link
                href="/"
                className="transition-colors hover:text-kaveri-ink"
              >
                Home
              </Link>

              <span>/</span>

              <span>Shop</span>

              {title !== "All pieces" && (
                <>
                  <span>/</span>
                  <span>{title}</span>
                </>
              )}
            </div>

            <h1 className="font-editorial mt-8 text-[clamp(4rem,8vw,8rem)] font-normal leading-[0.8] tracking-[-0.045em]">
              {title}.
            </h1>
          </div>

          <div className="max-w-sm md:pb-2">
            <p className="text-sm leading-7 text-kaveri-muted">
              Discover considered silhouettes, refined details, and contemporary
              pieces designed to become part of your wardrobe.
            </p>

            <Link href="/shop?sort=newest" className="kaveri-link mt-6">
              New arrivals
              <FiArrowUpRight className="kaveri-icon" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopHeader;
