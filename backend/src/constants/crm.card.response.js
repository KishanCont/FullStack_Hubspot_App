export const CRMCardData = {
  results: [
    {
      objectId: 200,
      title: "API-22: APIs working too fast",
      link: "http://example.com/1",
      created: "22 Feb 2024",
      priority: "HIGH",
      project: "API",
      reported_by: "msmith@hubspot.com",
      description:
        "Customer reported that the APIs are just running too fast. This is causing a problem in that they're so happy.",
      reporter_type: "Account Manager",
      status: "In Progress",
      ticket_type: "Bug",
      properties: [
        {
          label: "Resolved by",
          dataType: "EMAIL",
          value: "ijones@hubspot.com",
        },
      ],
      actions: [
        {
          type: "IFRAME",
          width: 890,
          height: 748,
          uri: "https://hubspot-app-plum.vercel.app/",
          label: "Edit",
        },
        {
          type: "CONFIRMATION_ACTION_HOOK",
          confirmationMessage: "Are you sure you want to delete this ticket?",
          confirmButtonText: "Yes",
          cancelButtonText: "No",
          httpMethod: "DELETE",
          uri: "https://example.com/tickets/245",
          label: "Delete",
        },
      ],
    },
  ],
};
