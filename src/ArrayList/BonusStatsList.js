const AddOptionSortSole = [
    {
        value: "",
        text: "Select"
    },
    {
        value: "none",
        text: "선택 안함"
    },
    {
        value: "str",
        text: "STR"
    },
    {
        value: "dex",
        text: "DEX"
    },
    {
        value: "int",
        text: "INT"
    },
    {
        value: "luk",
        text: "LUK"
    },
    {
        value: "strdex",
        text: "STR+DEX"
    },
    {
        value: "strint",
        text: "STR+INT"
    },
    {
        value: "strluk",
        text: "STR+LUK"
    },
    {
        value: "dexint",
        text: "DEX+INT"
    },
    {
        value: "dexluk",
        text: "DEX+LUK"
    },
    {
        value: "intluk",
        text: "INT+LUK"
    },
    {
        value: "hp",
        text: "최대 HP"
    },
    {
        value: "mp",
        text: "최대 MP"
    },
    {
        value: "leveldown",
        text: "착용 레벨 감소"
    },
    {
        value: "shield",
        text: "방어력",
    },
    {
        value: "power",
        text: "공격력"
    },
    {
        value: "charm",
        text: "마력"
    },
    {
        value: "allstat",
        text: "올스탯%"
    }
];

const AddOptionSortWeapon = [
    {
        value: "bossdamage",
        text: "보스몬스터 공격 시 데미지 %"
    },
    {
        value: "damage",
        text: "데미지"
    }
];

const AddOptionSortAcc = [
    {
        value: "speed",
        text: "이동속도"
    },
    {
        value: "jump",
        text: "점프력"
    }
];

const Step = [
    {
        step: "",
        text: "선택 안함"
    },
    {
        step: "first",
        text: "1추"
    },
    {
        step: "second",
        stext: "2추"
    },
    {
        step: "third",
        stext: "3추"
    },
    {
        step: "forth",
        stext: "4추"
    },
    {
        step: "fifth",
        stext: "5추"
    }
];

const AddOptionWeapon = [
    ...AddOptionSortSole,
    ...AddOptionSortWeapon
];

const AddOptionAcc = [
    ...AddOptionSortSole,
    ...AddOptionSortAcc
];

export { AddOptionWeapon, AddOptionAcc, Step };