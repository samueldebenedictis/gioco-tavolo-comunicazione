"use client";

function Dado(props: { n: number }) {
  if (props.n <= 0 || props.n > 6) {
    return <p>Dado non implementato</p>;
  }
  switch (props.n) {
    case 1:
      return (
        <div className="h-12 w-12 bg-white border flex border-black rounded m-1 grid grid-cols-3">
          <div className="m-auto"></div>
          <div className="m-auto"></div>
          <div className="m-auto"></div>
          <div className="m-auto"></div>
          <div className="m-auto">
            <div className="h-3 w-3 bg-black rounded-full m-auto"></div>
          </div>
          <div className="m-auto"></div>
          <div className="m-auto"></div>
          <div className="m-auto"></div>
          <div className="m-auto"></div>
        </div>
      );
    case 2:
      return (
        <div className="h-12 w-12 bg-white border flex border-black rounded m-1 grid grid-cols-3">
          <div className="m-auto">
            <div className="h-3 w-3 bg-black rounded-full m-auto"></div>
          </div>
          <div className="m-auto"></div>
          <div className="m-auto"></div>
          <div className="m-auto"></div>
          <div className="m-auto"></div>
          <div className="m-auto"></div>
          <div className="m-auto"></div>
          <div className="m-auto"></div>
          <div className="m-auto">
            <div className="h-3 w-3 bg-black rounded-full m-auto"></div>
          </div>
        </div>
      );

    case 3:
      return (
        <div className="h-12 w-12 bg-white border flex border-black rounded m-1 grid grid-cols-3">
          <div className="m-auto">
            <div className="h-3 w-3 bg-black rounded-full m-auto"></div>
          </div>
          <div className="m-auto"></div>
          <div className="m-auto"></div>
          <div className="m-auto"></div>
          <div className="m-auto">
            <div className="h-3 w-3 bg-black rounded-full m-auto"></div>
          </div>
          <div className="m-auto"></div>
          <div className="m-auto"></div>
          <div className="m-auto"></div>
          <div className="m-auto">
            <div className="h-3 w-3 bg-black rounded-full m-auto"></div>
          </div>
        </div>
      );

    case 4:
      return (
        <div className="h-12 w-12 bg-white border flex border-black rounded m-1 grid grid-cols-3">
          <div className="m-auto">
            <div className="h-3 w-3 bg-black rounded-full m-auto"></div>
          </div>
          <div className="m-auto"></div>
          <div className="m-auto">
            <div className="h-3 w-3 bg-black rounded-full m-auto"></div>
          </div>
          <div className="m-auto"></div>
          <div className="m-auto"></div>

          <div className="m-auto"></div>
          <div className="m-auto">
            <div className="h-3 w-3 bg-black rounded-full m-auto"></div>
          </div>
          <div className="m-auto"></div>
          <div className="m-auto">
            <div className="h-3 w-3 bg-black rounded-full m-auto"></div>
          </div>
        </div>
      );

    case 5:
      return (
        <div className="h-12 w-12 bg-white border flex border-black rounded m-1 grid grid-cols-3">
          <div className="m-auto">
            <div className="h-3 w-3 bg-black rounded-full m-auto"></div>
          </div>
          <div className="m-auto"></div>
          <div className="m-auto">
            <div className="h-3 w-3 bg-black rounded-full m-auto"></div>
          </div>
          <div className="m-auto"></div>
          <div className="m-auto">
            <div className="h-3 w-3 bg-black rounded-full m-auto"></div>
          </div>
          <div className="m-auto"></div>
          <div className="m-auto">
            <div className="h-3 w-3 bg-black rounded-full m-auto"></div>
          </div>
          <div className="m-auto"></div>
          <div className="m-auto">
            <div className="h-3 w-3 bg-black rounded-full m-auto"></div>
          </div>
        </div>
      );

    case 6:
      return (
        <div className="h-12 w-12 bg-white border flex border-black rounded m-1 grid grid-cols-3">
          <div className="m-auto">
            <div className="h-3 w-3 bg-black rounded-full m-auto"></div>
          </div>
          <div className="m-auto"></div>
          <div className="m-auto">
            <div className="h-3 w-3 bg-black rounded-full m-auto"></div>
          </div>
          <div className="m-auto">
            <div className="h-3 w-3 bg-black rounded-full m-auto"></div>
          </div>
          <div className="m-auto"></div>
          <div className="m-auto">
            <div className="h-3 w-3 bg-black rounded-full m-auto"></div>
          </div>
          <div className="m-auto">
            <div className="h-3 w-3 bg-black rounded-full m-auto"></div>
          </div>
          <div className="m-auto"></div>
          <div className="m-auto">
            <div className="h-3 w-3 bg-black rounded-full m-auto"></div>
          </div>
        </div>
      );
  }
}

export default function DadoTest() {
  return (
    <div>
      <Dado n={0} />
      <Dado n={1} />
      <Dado n={2} />
      <Dado n={3} />
      <Dado n={4} />
      <Dado n={5} />
      <Dado n={6} />
    </div>
  );
}
