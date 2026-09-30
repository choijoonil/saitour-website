import { airportService } from "@/data/services/airport";
import { corporateService } from "@/data/services/corporate";
import { dmzService } from "@/data/services/dmz";
import { guideService } from "@/data/services/guide";
import { privateTourService } from "@/data/services/private-tour";
import { seoulService } from "@/data/services/seoul";

export type { ServiceDetail, Tour } from "@/data/services/types";

export const services = [
  dmzService,
  seoulService,
  airportService,
  corporateService,
  privateTourService,
  guideService
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
