// Données Banque mondiale (WDI) — extraites le 2026-07-22 via api.worldbank.org.
// Doctrine ODT : aucune donnée sans source ni millésime. Ne pas modifier à la main :
// regénérer depuis l'API (voir /observatoire/methodologie-donnees).

export const WDI_SOURCE =
  "Banque mondiale — Indicateurs du développement dans le monde (WDI)";
export const WDI_EXTRACTION = "2026-07-22";

export const PAYS_CEMAC: Record<string, string> = {
  CMR: "Cameroun", GAB: "Gabon", COG: "Congo", TCD: "Tchad", CAF: "RCA", GNQ: "Guinée équatoriale",
};

export interface WdiValue { value: number; year: string }
export interface WdiIndicator { label: string; unit: string; values: Record<string, WdiValue> }

export const WDI: Record<string, WdiIndicator> = {
  "EG.ELC.ACCS.RU.ZS": {
    "label": "Accès à l'électricité (rural)",
    "unit": "% population rurale",
    "values": {
      "CAF": {
        "value": 2,
        "year": "2024"
      },
      "CMR": {
        "value": 42.7,
        "year": "2024"
      },
      "COG": {
        "value": 19.4,
        "year": "2024"
      },
      "GAB": {
        "value": 51.3,
        "year": "2024"
      },
      "GNQ": {
        "value": 5.1,
        "year": "2024"
      },
      "TCD": {
        "value": 100,
        "year": "2024"
      }
    }
  },
  "NY.GDP.PCAP.CD": {
    "label": "PIB par habitant",
    "unit": "USD courants",
    "values": {
      "CAF": {
        "value": 556.1,
        "year": "2025"
      },
      "CMR": {
        "value": 1972.4,
        "year": "2025"
      },
      "COG": {
        "value": 2514.7,
        "year": "2025"
      },
      "GAB": {
        "value": 8263.0,
        "year": "2025"
      },
      "GNQ": {
        "value": 6615.3,
        "year": "2025"
      },
      "TCD": {
        "value": 1022.3,
        "year": "2025"
      }
    }
  },
  "SP.URB.TOTL.IN.ZS": {
    "label": "Population urbaine",
    "unit": "% population",
    "values": {
      "CAF": {
        "value": 44.6,
        "year": "2025"
      },
      "CMR": {
        "value": 55.7,
        "year": "2025"
      },
      "COG": {
        "value": 64.1,
        "year": "2025"
      },
      "GAB": {
        "value": 92.1,
        "year": "2025"
      },
      "GNQ": {
        "value": 71.6,
        "year": "2025"
      },
      "TCD": {
        "value": 27.6,
        "year": "2025"
      }
    }
  },
  "EG.ELC.ACCS.ZS": {
    "label": "Accès à l'électricité",
    "unit": "% population",
    "values": {
      "CMR": {
        "value": 72,
        "year": "2024"
      },
      "GAB": {
        "value": 95.1,
        "year": "2024"
      },
      "COG": {
        "value": 53,
        "year": "2024"
      },
      "TCD": {
        "value": 13.4,
        "year": "2024"
      },
      "CAF": {
        "value": 18.2,
        "year": "2024"
      },
      "GNQ": {
        "value": 65.1,
        "year": "2024"
      }
    }
  },
  "SH.H2O.BASW.ZS": {
    "label": "Accès à l'eau potable (service de base)",
    "unit": "% population",
    "values": {
      "CMR": {
        "value": 71.4,
        "year": "2024"
      },
      "GAB": {
        "value": 88.6,
        "year": "2024"
      },
      "COG": {
        "value": 73.5,
        "year": "2021"
      },
      "TCD": {
        "value": 52.2,
        "year": "2024"
      },
      "CAF": {
        "value": 36.5,
        "year": "2024"
      },
      "GNQ": {
        "value": 64.7,
        "year": "2017"
      }
    }
  },
  "SH.STA.BASS.ZS": {
    "label": "Accès à l'assainissement (service de base)",
    "unit": "% population",
    "values": {
      "CMR": {
        "value": 47.1,
        "year": "2024"
      },
      "COG": {
        "value": 20.6,
        "year": "2021"
      },
      "TCD": {
        "value": 13.1,
        "year": "2024"
      },
      "GNQ": {
        "value": 66.3,
        "year": "2017"
      },
      "GAB": {
        "value": 57.4,
        "year": "2024"
      },
      "CAF": {
        "value": 14.0,
        "year": "2024"
      }
    }
  },
  "NY.GDP.MKTP.KD.ZG": {
    "label": "Croissance du PIB",
    "unit": "%/an",
    "values": {
      "CMR": {
        "value": 3.2,
        "year": "2025"
      },
      "GAB": {
        "value": 2.5,
        "year": "2025"
      },
      "COG": {
        "value": 3.1,
        "year": "2025"
      },
      "CAF": {
        "value": 4.5,
        "year": "2025"
      },
      "GNQ": {
        "value": -5.8,
        "year": "2025"
      }
    }
  },
  "NV.AGR.TOTL.ZS": {
    "label": "Part de l'agriculture dans le PIB",
    "unit": "% PIB",
    "values": {
      "CMR": {
        "value": 16.8,
        "year": "2025"
      },
      "GAB": {
        "value": 6.8,
        "year": "2025"
      },
      "COG": {
        "value": 10.1,
        "year": "2025"
      },
      "TCD": {
        "value": 36.3,
        "year": "2025"
      },
      "CAF": {
        "value": 27.6,
        "year": "2025"
      },
      "GNQ": {
        "value": 3.2,
        "year": "2025"
      }
    }
  },
  "IT.NET.USER.ZS": {
    "label": "Utilisateurs d'Internet",
    "unit": "% population",
    "values": {
      "CMR": {
        "value": 46.3,
        "year": "2024"
      },
      "GAB": {
        "value": 68.7,
        "year": "2024"
      },
      "COG": {
        "value": 47.3,
        "year": "2024"
      },
      "TCD": {
        "value": 12.6,
        "year": "2024"
      },
      "CAF": {
        "value": 13.8,
        "year": "2024"
      },
      "GNQ": {
        "value": 63.3,
        "year": "2024"
      }
    }
  },
  "SP.POP.TOTL": {
    "label": "Population totale",
    "unit": "habitants",
    "values": {
      "CMR": {
        "value": 29879337,
        "year": "2025"
      },
      "GAB": {
        "value": 2593130,
        "year": "2025"
      },
      "COG": {
        "value": 6484437,
        "year": "2025"
      },
      "TCD": {
        "value": 21003705,
        "year": "2025"
      },
      "CAF": {
        "value": 5513282,
        "year": "2025"
      },
      "GNQ": {
        "value": 1938431,
        "year": "2025"
      }
    }
  }
};

/** Séries Cameroun 2000–2024 (points disponibles uniquement). */
export const SERIES_CM: Record<string, { year: number; value: number }[]> = {
  "EG.ELC.ACCS.ZS": [
    {
      "year": 2000,
      "value": 41
    },
    {
      "year": 2001,
      "value": 46.2
    },
    {
      "year": 2002,
      "value": 44
    },
    {
      "year": 2003,
      "value": 45.1
    },
    {
      "year": 2004,
      "value": 47.1
    },
    {
      "year": 2005,
      "value": 47.2
    },
    {
      "year": 2006,
      "value": 49
    },
    {
      "year": 2007,
      "value": 48.2
    },
    {
      "year": 2008,
      "value": 50.6
    },
    {
      "year": 2009,
      "value": 51.7
    },
    {
      "year": 2010,
      "value": 52.8
    },
    {
      "year": 2011,
      "value": 53.7
    },
    {
      "year": 2012,
      "value": 55.2
    },
    {
      "year": 2013,
      "value": 56.3
    },
    {
      "year": 2014,
      "value": 56.8
    },
    {
      "year": 2015,
      "value": 58.6
    },
    {
      "year": 2016,
      "value": 59.8
    },
    {
      "year": 2017,
      "value": 60.9
    },
    {
      "year": 2018,
      "value": 62.2
    },
    {
      "year": 2019,
      "value": 63.2
    },
    {
      "year": 2020,
      "value": 64.3
    },
    {
      "year": 2021,
      "value": 65.4
    },
    {
      "year": 2022,
      "value": 71
    },
    {
      "year": 2023,
      "value": 72
    },
    {
      "year": 2024,
      "value": 72
    }
  ],
  "SH.H2O.BASW.ZS": [
    {
      "year": 2000,
      "value": 55.8
    },
    {
      "year": 2001,
      "value": 56.7
    },
    {
      "year": 2002,
      "value": 57.5
    },
    {
      "year": 2003,
      "value": 58.3
    },
    {
      "year": 2004,
      "value": 59.1
    },
    {
      "year": 2005,
      "value": 59.9
    },
    {
      "year": 2006,
      "value": 60.6
    },
    {
      "year": 2007,
      "value": 61.4
    },
    {
      "year": 2008,
      "value": 62.1
    },
    {
      "year": 2009,
      "value": 62.8
    },
    {
      "year": 2010,
      "value": 63.5
    },
    {
      "year": 2011,
      "value": 64.1
    },
    {
      "year": 2012,
      "value": 64.8
    },
    {
      "year": 2013,
      "value": 65.4
    },
    {
      "year": 2014,
      "value": 66.0
    },
    {
      "year": 2015,
      "value": 66.6
    },
    {
      "year": 2016,
      "value": 67.2
    },
    {
      "year": 2017,
      "value": 67.7
    },
    {
      "year": 2018,
      "value": 68.3
    },
    {
      "year": 2019,
      "value": 68.8
    },
    {
      "year": 2020,
      "value": 69.3
    },
    {
      "year": 2021,
      "value": 69.8
    },
    {
      "year": 2022,
      "value": 70.3
    },
    {
      "year": 2023,
      "value": 70.7
    },
    {
      "year": 2024,
      "value": 71.4
    }
  ],
  "IT.NET.USER.ZS": [
    {
      "year": 2000,
      "value": 0.3
    },
    {
      "year": 2001,
      "value": 0.3
    },
    {
      "year": 2002,
      "value": 0.4
    },
    {
      "year": 2003,
      "value": 0.6
    },
    {
      "year": 2004,
      "value": 1.0
    },
    {
      "year": 2005,
      "value": 1.4
    },
    {
      "year": 2006,
      "value": 2.0
    },
    {
      "year": 2007,
      "value": 2.9
    },
    {
      "year": 2008,
      "value": 3.4
    },
    {
      "year": 2009,
      "value": 3.8
    },
    {
      "year": 2010,
      "value": 4.3
    },
    {
      "year": 2011,
      "value": 5
    },
    {
      "year": 2012,
      "value": 7.5
    },
    {
      "year": 2013,
      "value": 10
    },
    {
      "year": 2014,
      "value": 16.2
    },
    {
      "year": 2015,
      "value": 18.3
    },
    {
      "year": 2016,
      "value": 20.6
    },
    {
      "year": 2017,
      "value": 23.2
    },
    {
      "year": 2018,
      "value": 29.7
    },
    {
      "year": 2019,
      "value": 36.5
    },
    {
      "year": 2020,
      "value": 37.7
    },
    {
      "year": 2021,
      "value": 38.9
    },
    {
      "year": 2022,
      "value": 40.1
    },
    {
      "year": 2023,
      "value": 42.2
    },
    {
      "year": 2024,
      "value": 46.3
    }
  ]
};

export const cmValue = (code: string) => WDI[code]?.values["CMR"];
