import Stat from "./Stat";
import { HiOutlineBriefcase } from "react-icons/hi2";
import { HiOutlineBanknotes } from "react-icons/hi2";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { HiOutlineChartBar } from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";

function Stats({ bookings, confirmedStays, numDays, cabinCounts }) {
  const numBookings = bookings.length;
  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);
  const checkins = confirmedStays.length;
  const occupation =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinCounts);
  return (
    <>
      <Stat
        icon={<HiOutlineBriefcase />}
        title="Bookings"
        value={numBookings}
        color="blue"
      />
      <Stat
        icon={<HiOutlineBanknotes />}
        title="Sales"
        value={formatCurrency(sales)}
        color="green"
      />
      <Stat
        icon={<HiOutlineCalendarDays />}
        title="Check ins"
        value={checkins}
        color="indigo"
      />
      <Stat
        icon={<HiOutlineChartBar />}
        title="Occupancy rate"
        value={`${Math.round(occupation * 100)}%`}
        color="yellow"
      />
    </>
  );
}

export default Stats;
