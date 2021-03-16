import { IItem } from "~/services/getUserItems";

const itemHasOldPassword = (item: IItem) => {
    const { createdAt } = item;
    const today = new Date();
    const itemDate = new Date(createdAt);
    const thirtyDaysInMilliseconds = 2592000000;
    return (Number(today) - Number(itemDate)) > thirtyDaysInMilliseconds;
};

export default itemHasOldPassword;
