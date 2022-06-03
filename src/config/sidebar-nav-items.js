export default function() {
  return [
    {
      title: "Dashboard",
      htmlBefore: '<i class="material-icons">home</i>',
      to: "/dashboard",
    },
    {
      title: "Api keys",
      htmlBefore: '<i class="material-icons">key</i>',
      to: "/credential",
    },
    {
      title: "Errors",
      htmlBefore: '<i class="material-icons">error</i>',
      to: "/errors",
    }
  ];
}
