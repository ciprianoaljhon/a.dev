// import { useContext, createContext } from "react";

// export const ScrollContext = createContext();

// export const ScrollContextProvider = ({ children }) => {
//   const homeRef = useRef(null);
//   const projRef = useRef(null);
//   const aboutRef = useRef(null);
//   const contactRef = useRef(null);

//   const scrollTo = (ref) => {
//     window.scrollTo({
//       top: ref.offsetTop,
//       behavior: "smooth",
//     });
//     console.log(window);
//   };

//   return (
//     <ScrollContext.Provider
//       value={{ scrollTo, homeRef, projRef, aboutRef, contactRef }}
//     >
//       {children}
//     </ScrollContext.Provider>
//   );
// };

// export function useScroll() {
//   return useContext(ScrollContext);
// }
