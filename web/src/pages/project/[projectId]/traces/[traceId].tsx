import { TracePage } from "@/src/components/trace/TracePage";
import { useRouter } from "next/router";

export default function Trace() {
  const router = useRouter();
  const traceId = router.query.traceId as string;

  const timestamp =
    router.query.timestamp && typeof router.query.timestamp === "string"
      ? new Date(decodeURIComponent(router.query.timestamp))
      : undefined;

  return <TracePage traceId={traceId} timestamp={timestamp} />;
}

// 1. 우리꺼 연결해서 전체 노드 가져와야 함 => 이거 트레이싱은 현재 되고 있는 중
// 2. 데이터 셋 추가하게 되면, json으로 ? 아니면 무조건 파일 형태로 ? => 이거 validation check
// 3. dataset 추가했을 때, 확인되면 바로 그래프 돌아가게 할거...? => 바로 traces 화면으로 이동
// 4. "증강" 버튼 누르면 해당 데이터셋을 기준으로 증강해서 db저장? 일단은 전체 그래프는 안돌아...?
// 5. 그럼 prompt 화면은 필요 없는건가?
