export function LoadingScreen() {
  return (
    <div
      style={{
        position: "absolute",
        marginTop: "5%",
        marginLeft: "20%",
      }}
    >
      <div
        style={{
          width: "60vw",
          background: "-webkit-linear-gradient(#1f222a, #292a2d)",
          textAlign: "center",
          boxShadow: "0px 0px 6px 3px",
        }}
      >
        <div
          style={{
            borderStyle: "double",
            borderColor: "white",
            paddingBottom: "60%",
            width: "60%",
            background: "no-repeat",
            backgroundSize: "contain",
            backgroundImage: 'url("cs_map.jpg")',
          }}
        ></div>
      </div>

      <div
        style={{
          marginTop: "1vw",
          width: "60vw",
          height: "8vh",
          background: "-webkit-linear-gradient(#1f222a, #292a2d)",
          textAlign: "center",
          boxShadow: "0px 0px 6px 3px",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
          }}
        ></div>
      </div>
    </div>
  );
}
