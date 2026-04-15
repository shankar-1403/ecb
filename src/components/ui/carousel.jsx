import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "../../lib/utils";

const CarouselContext = React.createContext(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}

export const Carousel = React.forwardRef(
  ({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins
    );

    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);

    const onSelect = React.useCallback((api) => {
      if (!api) return;
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    }, []);

    const scrollPrev = React.useCallback(() => {
      api && api.scrollPrev();
    }, [api]);

    const scrollNext = React.useCallback(() => {
      api && api.scrollNext();
    }, [api]);

    const handleKeyDown = React.useCallback(
      (event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext]
    );

    React.useEffect(() => {
      if (!api || !setApi) return;
      setApi(api);
    }, [api, setApi]);

    React.useEffect(() => {
      if (!api) return;

      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);

      return () => {
        api.off("select", onSelect);
        api.off("reInit", onSelect);
      };
    }, [api, onSelect]);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api,
          opts,
          orientation,
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={`relative ${className || ""}`}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  }
);

Carousel.displayName = "Carousel";

// Content
export const CarouselContent = React.forwardRef(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  );
});

CarouselContent.displayName = "CarouselContent";

// Item
export const CarouselItem = React.forwardRef(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();

  return (
    <div
      ref={ref}
      role="group"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  );
});

CarouselItem.displayName = "CarouselItem";

const navButtonClass =
  "absolute z-20 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-gray-200/90 bg-white text-[#1D2F4F] shadow-[0_8px_30px_-6px_rgba(29,47,79,0.2)] transition disabled:cursor-not-allowed " +
  "hover:border-amber-500 hover:bg-amber-500 hover:text-white hover:shadow-lg hover:shadow-amber-500/30 " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 " +
  "disabled:pointer-events-none disabled:opacity-30 disabled:shadow-none md:h-12 md:w-12";

// Previous Button
export const CarouselPrevious = React.forwardRef(({ className, ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();

  return (
    <button
      ref={ref}
      type="button"
      aria-label="Previous slide"
      className={cn(
        navButtonClass,
        orientation === "horizontal"
          ? "left-2 top-1/2 -translate-y-1/2 sm:left-3 md:-left-13"
          : "-top-14 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft className="h-5 w-5 md:h-[1.35rem] md:w-[1.35rem]" strokeWidth={2.25} />
    </button>
  );
});

// Next Button
export const CarouselNext = React.forwardRef(({ className, ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();

  return (
    <button
      ref={ref}
      type="button"
      aria-label="Next slide"
      className={cn(
        navButtonClass,
        orientation === "horizontal"
          ? "right-2 top-1/2 -translate-y-1/2 sm:right-3 md:-right-13"
          : "-bottom-14 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight className="h-5 w-5 md:h-[1.35rem] md:w-[1.35rem]" strokeWidth={2.25} />
    </button>
  );
});