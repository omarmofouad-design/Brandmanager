/* ==================================================================
   2026 PATIENT PLAN
   A second source: the "Omar Fouad / 2026 Target of Patients" table.
   It is not part of the ALLnONE workbook, so it is held separately and
   labelled wherever it appears.

   Joined to the workbook on each account's 2026 sales target, which
   matches on all fourteen rows (702 units, 62 patients — the same
   totals the table states). "BOC" is the workbook's Hamad (Bahrain),
   "Qatar/NCCCR" its HMC, both confirmed by the sales target.

   It covers Omar's accounts only. Nothing is shown for the other three
   territories until their own plans are supplied.
   ================================================================== */
var PLAN2026 = {
  source: "Omar Fouad / 2026 Target of Patients",
  owner:  "Omar",
  patients: {
    ac44:7, ac40:2, ac37:2, ac36:1, ac42:5, ac41:2, ac39:3, ac45:1,
    ac53:13, ac55:11, ac56:6, ac57:4, ac59:3, ac60:2
  },
  /* the table's own sales target, kept so the join stays checkable */
  salesUnits: {
    ac44:83, ac40:19, ac37:6, ac36:0, ac42:63, ac41:27, ac39:44, ac45:18,
    ac53:195, ac55:120, ac56:50, ac57:28, ac59:31, ac60:18
  }
};
