import { Thread, useEdgeRuntime } from "@assistant-ui/react";
 
const MyApp = () => {
  const runtime = useEdgeRuntime({
    api: "/api/chat",
  });
 
  return (
    <div className="h-full">
      <Thread runtime={runtime} />
    </div>
  );
};