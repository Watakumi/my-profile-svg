import { serve } from "https://deno.land/std@0.125.0/http/server.ts";
import { hundler } from "./index.ts";

serve(hundler, { port: 8080 });
