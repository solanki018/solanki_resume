// Updated Carousel.tsx with responsive design, improved animation, and modern UI

import * as React from "react";
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/UI_ELEMENT/button"; // Adjust the import path as necessary
import { motion } from "framer-motion";

type CarouselApi = UseEmblaCarouselType[1];
type CarouselProps = {
  opts?: Parameters<typeof useEmblaCarousel>[0];
  plugins?: Parameters<typeof useEmblaCarousel>[1];
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
};

const CarouselContext = React.createContext<any>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) throw new Error("useCarousel must be used within a <Carousel />");
  return context;
}

const Carousel = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & CarouselProps>(
  ({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
    const [carouselRef, api] = useEmblaCarousel(
      { ...opts, axis: orientation === "horizontal" ? "x" : "y", align: "start" },
      plugins
    );

    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);

    const onSelect = React.useCallback((api: CarouselApi) => {
      setCanScrollPrev(api?.canScrollPrev() || false);
      setCanScrollNext(api?.canScrollNext() || false);
    }, []);

    const scrollPrev = () => api?.scrollPrev();
    const scrollNext = () => api?.scrollNext();

    React.useEffect(() => {
      if (!api) return;
      if (setApi) setApi(api);
      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);
      return () => {
        api.off("select", onSelect);
        api.off("reInit", onSelect);
      };
    }, [api, setApi, onSelect]);

    return (
      <CarouselContext.Provider value={{ carouselRef, api, scrollPrev, scrollNext, canScrollPrev, canScrollNext, orientation }}>
        <div ref={ref} className={cn("relative w-full overflow-hidden", className)} {...props}>
          {children}
        </div>
      </CarouselContext.Provider>
    );
  }
);
Carousel.displayName = "Carousel";

const CarouselContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel();

    return (
      <div ref={carouselRef} className="overflow-hidden">
        <div
          ref={ref}
          className={cn(
            "flex gap-4 transition-transform duration-500 ease-in-out px-4",
            orientation === "vertical" ? "flex-col pt-4" : "flex-row",
            className
          )}
          {...props}
        />
      </div>
    );
  }
);
CarouselContent.displayName = "CarouselContent";

const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    const { orientation } = useCarousel();
    // Only pass allowed props to motion.div
    const { style, id, tabIndex, role, "aria-roledescription": ariaRoleDescription, ...rest } = props;
    return (
      <motion.div
        ref={ref}
        whileHover={{ scale: 1.03 }}
        className={cn(
          "min-w-0 shrink-0 grow-0 rounded-lg bg-white/5 p-4 shadow-md backdrop-blur-lg",
          "transition-all duration-300",
          "w-full sm:w-1/2 md:w-1/3 lg:w-1/4",
          orientation === "vertical" ? "pt-4" : "",
          className
        )}
        style={style}
        id={id}
        tabIndex={tabIndex}
        role={role ?? "group"}
        aria-roledescription={ariaRoleDescription ?? "slide"}
      >
        {children}
      </motion.div>
    );
  }
);
CarouselItem.displayName = "CarouselItem";

const CarouselPrevious = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, ...props }, ref) => {
    const { scrollPrev, canScrollPrev } = useCarousel();
    return (
      <Button
        ref={ref}
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        className={cn(
          "absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 text-white shadow-lg hover:bg-white/40",
          className
        )}
        {...props}
      >
        <ArrowLeft className="h-4 w-4" />
        <span className="sr-only">Previous slide</span>
      </Button>
    );
  }
);
CarouselPrevious.displayName = "CarouselPrevious";

const CarouselNext = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, ...props }, ref) => {
    const { scrollNext, canScrollNext } = useCarousel();
    return (
      <Button
        ref={ref}
        onClick={scrollNext}
        disabled={!canScrollNext}
        className={cn(
          "absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 text-white shadow-lg hover:bg-white/40",
          className
        )}
        {...props}
      >
        <ArrowRight className="h-4 w-4" />
        <span className="sr-only">Next slide</span>
      </Button>
    );
  }
);
CarouselNext.displayName = "CarouselNext";

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
};

export type {
  CarouselApi
};