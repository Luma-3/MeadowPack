import mods.itemstages.ItemStages;

var name_stages = "automation_age";

ItemStages.restrict(<tag:items:mid_meadow:automation_age>, name_stages);

ItemStages.createModRestriction("createaddition", name_stages);
ItemStages.createModRestriction("create_enchantment_industry", name_stages);
