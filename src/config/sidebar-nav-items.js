export default function() {
  return [
    {
      title: "Dashboard",
      htmlBefore: '<i class="material-icons">home</i>',
      to: "/dashboard",
    },
    {
      title: "Credentials",
      htmlBefore: '<i class="material-icons">key</i>',
      to: "/credentials",
    },
    {
      title: "Errors",
      htmlBefore: '<i class="material-icons">error</i>',
      to: "/errors",
    }
  ];
}
