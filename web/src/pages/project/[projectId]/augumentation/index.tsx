import { ActionButton } from "@/src/components/ActionButton";
import Page from "@/src/components/layouts/page";
import { PlusIcon } from "lucide-react";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/src/components/ui/dialog";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/src/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table";
import { Button } from "@/src/components/ui/button";
import { Checkbox } from "@/src/components/ui/checkbox";

// 데이터 목록 및 선택 (trace, jira, dataset)
// 선택한 데이터 목록 리스트 받아오기
// 어떤 graph 증강할지 선택

export default function Augumantation() {
  const [open, setOpen] = useState(false);
  const [selectedDataType, setSelectedDataType] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("jira");
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());

  const handleSelect = (id: string) => {
    setSelectedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const handleSubmit = () => {
    // 여기에 제출 로직 추가
    console.log("Selected items:", Array.from(selectedItems));
    setOpen(false);
  };

  return (
    <Page
      headerProps={{
        title: "Augumentation",
        help: { description: "전달하고 싶은 설명 적을 것" },
        actionButtonsRight: (
          <ActionButton
            icon={<PlusIcon className="h-4 w-4" aria-hidden="true" />}
            onClick={() => setOpen(true)}
          >
            New Augmentation
          </ActionButton>
        ),
      }}
    >
      {/* <div className="flex gap-4">
        <Select
          value={selectedDataType || undefined}
          onValueChange={setSelectedDataType}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Datatype" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="trace">Trace</SelectItem>
            <SelectItem value="jira">Jira</SelectItem>
            <SelectItem value="dataset">Dataset</SelectItem>
          </SelectContent>
        </Select>
        <Select disabled={!selectedDataType}>
          <SelectTrigger className="w-[180px]">
            <SelectValue
              placeholder={`Select ${selectedDataType + " List" || "Data"}`}
            />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">Option 1</SelectItem>
            <SelectItem value="option2">Option 2</SelectItem>
          </SelectContent>
        </Select>
      </div> */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Select New Augmentation</DialogTitle>
          </DialogHeader>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-1/2 grid-cols-3">
              <TabsTrigger value="jira">Jira</TabsTrigger>
              <TabsTrigger value="dataset">Dataset</TabsTrigger>
              <TabsTrigger value="traces">Traces</TabsTrigger>
            </TabsList>

            <TabsContent value="jira">
              <div className="space-y-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[50px]">
                        <Checkbox
                          checked={selectedItems.size === 3} // 예시 데이터 개수에 맞게 수정
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setSelectedItems(
                                new Set(["jira1", "jira2", "jira3"]),
                              );
                            } else {
                              setSelectedItems(new Set());
                            }
                          }}
                        />
                      </TableHead>
                      <TableHead>Project</TableHead>
                      <TableHead>Issue Type</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <Checkbox
                          checked={selectedItems.has("jira1")}
                          onCheckedChange={() => handleSelect("jira1")}
                        />
                      </TableCell>
                      <TableCell>Project A</TableCell>
                      <TableCell>Bug</TableCell>
                      <TableCell>Open</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
            <TabsContent value="dataset">
              <div className="space-y-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[50px]">
                        <Checkbox
                          checked={selectedItems.size === 3}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setSelectedItems(
                                new Set(["dataset1", "dataset2", "dataset3"]),
                              );
                            } else {
                              setSelectedItems(new Set());
                            }
                          }}
                        />
                      </TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Size</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <Checkbox
                          checked={selectedItems.has("dataset1")}
                          onCheckedChange={() => handleSelect("dataset1")}
                        />
                      </TableCell>
                      <TableCell>Dataset 1</TableCell>
                      <TableCell>CSV</TableCell>
                      <TableCell>1.2MB</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            <TabsContent value="traces">
              <div className="space-y-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[50px]">
                        <Checkbox
                          checked={selectedItems.size === 3}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setSelectedItems(
                                new Set(["trace1", "trace2", "trace3"]),
                              );
                            } else {
                              setSelectedItems(new Set());
                            }
                          }}
                        />
                      </TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <Checkbox
                          checked={selectedItems.has("trace1")}
                          onCheckedChange={() => handleSelect("trace1")}
                        />
                      </TableCell>
                      <TableCell>Trace 1</TableCell>
                      <TableCell>LLM</TableCell>
                      <TableCell>2024-03-20</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          </Tabs>

          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSubmit}>Submit</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Page>
  );
}
