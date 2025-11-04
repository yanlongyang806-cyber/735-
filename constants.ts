import { QueryCategory } from './types';

const allTableNames: string[] = [
  'access_requirement', 'achievement_criteria_data', 'achievement_dbc', 'achievement_reward', 
  'archaeology_digsites', 'archaeology_zones', 'area_queststart', 'areatrigger_accessory', 
  'areatrigger_actions', 'areatrigger_data', 'areatrigger_force', 'areatrigger_polygon', 
  'areatrigger_questender', 'areatrigger_scripts', 'areatrigger_tavern', 'areatrigger_teleport', 
  'areatrigger_template', 'areatrigger_template_circle', 'areatrigger_template_sequence', 
  'autobroadcast', 'bad_word_mail', 'bad_words', 'battleground_template', 'battlemaster_entry', 
  'battlepay_display_info', 'battlepay_display_info_locales', 'battlepay_display_info_visuals', 
  'battlepay_product', 'battlepay_product_group', 'battlepay_product_group_locales', 
  'battlepay_product_item', 'battlepay_shop_entry', 'battlepet_info', 'battlepet_npc_team_member', 
  'battlepet_template', 'blackmarket_template', 'character_template', 'character_template_class', 
  'character_template_item', 'character_template_quest', 'character_template_spell', 
  'character_template_title', 'cheat_sanctions', 'class_expansion_requirement', 'command', 
  'conditions', 'conversation', 'conversation_actor', 'conversation_creature', 'conversation_data', 
  'creature', 'creature_action', 'creature_addon', 'creature_ai_instance', 
  'creature_ai_instance_door', 'creature_classlevelstats', 'creature_difficulty_stat', 
  'creature_equip_template', 'creature_formations', 'creature_loot_template', 'creature_model_info', 
  'creature_onkill_reputation', 'creature_questender', 'creature_queststarter', 
  'creature_summon_groups', 'creature_template', 'creature_template_addon', 
  'creature_template_outfits', 'creature_template_spell', 'creature_template_wdb', 
  'creature_template_wdb_locale', 'creature_text', 'creature_text_back', 'creature_transport', 
  'criteria_dbc', 'criteriatree_dbc', 'currency_loot', 'custom_texts', 'db_script_string', 
  'dbc_itemextendedcost', 'dbc_itemrandomsuffix', 'dbc_itemspecoverride', 'disables', 
  'disenchant_loot_template', 'display_choice', 'display_choice_item', 'event_scripts', 
  'eventobject', 'eventobject_template', 'exploration_basexp', 'fishing_loot_template', 
  'game_event', 'game_event_arena_seasons', 'game_event_condition', 'game_event_creature', 
  'game_event_creature_quest', 'game_event_gameobject', 'game_event_gameobject_quest', 
  'game_event_model_equip', 'game_event_npc_vendor', 'game_event_npcflag', 'game_event_pool', 
  'game_event_prerequisite', 'game_event_quest_condition', 'game_event_seasonal_questrelation', 
  'game_event_worldquest', 'game_event_worldstate', 'game_graveyard_zone', 'game_tele', 
  'game_weather', 'gameobject', 'gameobject_action', 'gameobject_loot_template', 
  'gameobject_quest_visual', 'gameobject_questender', 'gameobject_queststarter', 
  'gameobject_scripts', 'gameobject_template', 'garrison_building_creature', 
  'garrison_building_gameobject', 'garrison_follower_class_spec_abilities', 
  'garrison_mission_line', 'garrison_plot_finalize_info', 'garrison_scripts', 
  'garrison_shipment', 'garrison_tradeskill', 'gossip_menu', 'gossip_menu_option', 
  'gossip_menu_option_locale', 'guild_challenge_reward', 'guild_rewards', 'guild_xp_for_level', 
  'guildhouses', 'instance_encounters', 'instance_template', 'ip2nation', 'ip2nationcountries', 
  'item_enchantment_bonus', 'item_enchantment_random_tiers', 'item_enchantment_template', 
  'item_loot_template', 'item_script_names', 'item_template', 'item_template_addon', 
  'item_template_dop', 'itemdisenchantloot_dbc', 'itemextendedcost_db2', 'itemspecoverride_dbc', 
  'letter_analogs', 'lfg_dungeon_rewards', 'lfg_entrances', 'linked_respawn', 
  'locales_achievement_reward', 'locales_gameobject', 'locales_item', 'locales_npc_text', 
  'locales_page_text', 'locales_points_of_interest', 'loot_item_bonus', 'luck_loot_template', 
  'mail_level_reward', 'mail_loot_template', 'milling_loot_template', 'mission_quest_link', 
  'mission_reward', 'mission_reward_owermax', 'mount_definitions', 'mount_list', 
  'npc_spellclick_spells', 'npc_text', 'npc_trainer', 'npc_vendor', 'outdoorpvp_template', 
  'package_antispamm', 'page_text', 'page_text_locale', 'personal_loot_template', 
  'pet_levelstats', 'pet_name_generation', 'pet_stats', 'phase_definitions', 
  'pickpocketing_loot_template', 'player_factionchange_achievement', 'player_factionchange_items', 
  'player_factionchange_reputations', 'player_factionchange_spells', 'player_factionchange_titles', 
  'player_levelstats', 'player_xp_for_level', 'playerchoice', 'playerchoice_locale', 
  'playerchoice_response', 'playerchoice_response_locale', 'playerchoice_response_reward', 
  'playerchoice_response_reward_currency', 'playerchoice_response_reward_faction', 
  'playerchoice_response_reward_item', 'playercreateinfo', 'playercreateinfo_action', 
  'playercreateinfo_item', 'playercreateinfo_quest', 'playercreateinfo_spell', 
  'playercreateinfo_spell_custom', 'points_of_interest', 'pool_creature', 'pool_gameobject', 
  'pool_gameobjectrestruct1', 'pool_pool', 'pool_quest', 'pool_template', 
  'prospecting_loot_template', 'pvp_reward', 'quest_details', 'quest_end_scripts', 
  'quest_objectives', 'quest_objectives_locale', 'quest_offer_reward', 
  'quest_offer_reward_locale', 'quest_poi', 'quest_poi_points', 'quest_request_items', 
  'quest_request_items_locale', 'quest_start_scripts', 'quest_template', 
  'quest_template_addon', 'quest_template_locale', 'quest_visual_effect', 
  'race_expansion_requirement', 'race_unlock_requirement', 'reference_loot_template', 
  'reputation_reward_rate', 'reputation_spillover_template', 'scenario_data', 'scenario_poi', 
  'scenario_poi_points', 'scenario_step_spells', 'sceneobject_data', 'script_texts', 
  'script_waypoint', 'skill_discovery_template', 'skill_extra_item_template', 
  'skill_fishing_base_level', 'skill_tiers', 'skinning_loot_template', 'smart_scripts', 
  'spell_area', 'spell_aura_dummy', 'spell_aura_trigger', 'spell_bonus_data', 
  'spell_check_cast', 'spell_concatenate_aura', 'spell_dummy_trigger', 
  'spell_enchant_proc_data', 'spell_forbidden', 'spell_group', 'spell_group_stack_rules', 
  'spell_learn_spell', 'spell_linked_spell', 'spell_loot_template', 'spell_pending_cast', 
  'spell_pet_auras', 'spell_phase', 'spell_proc', 'spell_proc_check', 'spell_proc_event', 
  'spell_pvp_balance', 'spell_radius', 'spell_ranks', 'spell_required', 'spell_scene', 
  'spell_scene_event', 'spell_script_names', 'spell_scripts', 'spell_talent_linked_spell', 
  'spell_target_filter', 'spell_target_position', 'spell_threat', 'spell_trigger', 
  'spell_trigger_delay', 'spell_visual', 'spell_visual_kit', 'spell_visual_play_orphan', 
  'temp_battlepet_spawn_relation', 'transports', 'trinity_string', 'vehicle_accessory', 
  'vehicle_attachment_offset', 'vehicle_template_accessory', 'version', 'warden_checks', 
  'warden_overrides', 'waypoint_data', 'waypoint_data_script', 'waypoint_scripts', 
  'waypoints', 'wild_battlepet_zone_pool', 'world_loot_template', 'world_map_difficulty_stats', 
  'world_quest_faction_analogs', 'world_quest_item', 'world_quest_template', 
  'world_quest_update', 'world_rate_info', 'world_seamless_teleport', 'world_state_expression', 
  'worldstate_data', 'worldstate_template', 'zone_loot_template'
];

export const queryCategories: QueryCategory[] = [
  {
    id: 'db_utils',
    name: 'Database Utilities',
    items: [
      {
        id: 'db_list_tables',
        title: '查询所有表的名称 (List All Table Names)',
        description: '这个命令可以直接回答你的问题。它会列出你当前选择的数据库中的所有表。请确保在使用前先选择了正确的数据库 (例如 `USE world;` 或 `USE characters;`)。',
        query: 'SHOW TABLES;'
      },
      {
        id: 'db_table_structure',
        title: '查看表结构 (Describe Table Structure)',
        description: '查看特定表的列、数据类型和其他信息，对于理解数据如何存储非常有用。将 `table_name` 替换为你要查询的表名。',
        query: 'DESCRIBE `table_name`;'
      }
    ]
  },
  {
    id: 'db_schema',
    name: 'Database Schema',
    items: [
      {
        id: 'db_all_tables_list',
        title: '表名参考 (Table Name Reference)',
        description: '一个在 SPP 7.3.5 world 数据库中常见表的列表，用于快速参考。您可以使用下方的搜索框进行过滤。',
        data: {
          type: 'table_list',
          tables: allTableNames,
        },
      },
    ]
  },
  {
    id: 'quest_fixing',
    name: 'Quest Bug Fixing',
    items: [
      {
        id: 'quest_find_by_name',
        title: '通过名称查找任务 (Find Quest by Name)',
        description: '如果你只知道任务的大致名称，可以用这个查询来找到它的条目ID(entry)和完整标题。',
        query: `SELECT entry, Title FROM quest_template WHERE Title LIKE '%Your Quest Name%';`
      },
      {
        id: 'quest_find_starter',
        title: '查找任务给予者 (Find Quest Starter)',
        description: '通过任务ID查找给予该任务的NPC (creature) 或物件 (gameobject) 的ID。',
        query: `
-- To find NPC quest givers
SELECT creature AS id, 'NPC' AS type FROM creature_queststarter WHERE quest = YourQuestID;

-- To find GameObject quest givers
SELECT go AS id, 'GameObject' AS type FROM gameobject_queststarter WHERE quest = YourQuestID;
        `
      },
      {
        id: 'quest_find_ender',
        title: '查找任务结束者 (Find Quest Ender)',
        description: '通过任务ID查找结束该任务的NPC (creature) 的ID。',
        query: 'SELECT creature FROM creature_questender WHERE quest = YourQuestID;'
      },
      {
        id: 'quest_check_objectives',
        title: '检查任务目标 (Check Quest Objectives)',
        description: '查看任务的所有目标，例如需要击杀的NPC、收集的物品或需要互动的物件。这对于修复无法完成的任务目标至关重要。',
        query: `
SELECT 
    RequiredNpcOrGo1, RequiredNpcOrGoCount1,
    RequiredNpcOrGo2, RequiredNpcOrGoCount2,
    RequiredNpcOrGo3, RequiredNpcOrGoCount3,
    RequiredNpcOrGo4, RequiredNpcOrGoCount4,
    RequiredItemId1, RequiredItemCount1,
    RequiredItemId2, RequiredItemCount2,
    RequiredItemId3, RequiredItemCount3,
    RequiredItemId4, RequiredItemCount4,
    RequiredSourceItemId1, RequiredSourceItemCount1,
    RequiredSourceItemId2, RequiredSourceItemCount2,
    RequiredSourceItemId3, RequiredSourceItemCount3,
    RequiredSourceItemId4, RequiredSourceItemCount4
FROM quest_template 
WHERE entry = YourQuestID;
        `
      }
    ]
  },
  {
    id: 'npc_item_lookup',
    name: 'NPC & Item Lookup',
    items: [
      {
        id: 'npc_find_by_name',
        title: '通过名称查找NPC (Find NPC by Name)',
        description: '查找NPC的条目ID(entry)。这对于查找NPC的位置、掉落、售卖物品等信息是第一步。',
        query: `SELECT entry, name FROM creature_template WHERE name LIKE '%Your NPC Name%';`
      },
      {
        id: 'item_find_by_name',
        title: '通过名称查找物品 (Find Item by Name)',
        description: '查找物品的条目ID(entry)。用于检查物品属性、掉落来源或任务要求。',
        query: `SELECT entry, name FROM item_template WHERE name LIKE '%Your Item Name%';`
      },
      {
        id: 'npc_loot',
        title: '查找NPC掉落 (Find NPC Loot)',
        description: '通过NPC的条目ID(entry)查找其掉落模板，然后根据掉落模板查找所有可能掉落的物品。',
        query: `
-- Step 1: Find the loot ID from creature_template
SELECT lootid FROM creature_template WHERE entry = YourNpcEntryID;

-- Step 2: Use the lootid to find all item drops
SELECT item, ChanceOrQuestChance, groupid, mincountOrRef, maxcount 
FROM creature_loot_template 
WHERE entry = YourLootID;
        `
      }
    ]
  }
];