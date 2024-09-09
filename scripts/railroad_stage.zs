import mods.itemstages.ItemStages;

var name_stages = "railroad_rage";

ItemStages.restrict(<tag:items:mid_meadow:railroad_rage>, name_stages);

ItemStages.createModRestriction("railways", name_stages);
ItemStages.createModRestriction("bellsandwhistles", name_stages);